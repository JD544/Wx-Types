 export const WxTypesSettings: string = `/**
Name: WxTypesSetttings
Type: Extension
Description: Add custom type definitions to the TypeScript language service
Author: Wx Team
 */

interface TypeDefinition {
  id: string;
  name: string;
  code: string;
  enabled: boolean;
}

interface WxTypesSettingsProps {
  monacoInstance: any;
  onSave: (settings: TypeDefinition[]) => void;
  onClose: () => void;
}

export default function WxTypesSettings({ 
monacoInstance,
onSave,
onClose
}: WxTypesSettingsProps) {
   // Default type definitions
  const defaultTypes = [
    {
      id: '1',
      name: 'MyNewType',
      code: \`declare type MyNewType = {
    name: string;
    age: number;
};\`,
      enabled: true
    },
    {
      id: '2',
      name: 'MyCustomInterface',
      code: \`declare interface MyCustomInterface {
    id: string;
    value: MyNewType;
}\`,
      enabled: true
    }
  ];

  const [typeDefinitions, setTypeDefinitions] = useState(defaultTypes);
  const [editingType, setEditingType] = useState(null);
  const [newTypeCode, setNewTypeCode] = useState('');
  const [newTypeName, setNewTypeName] = useState('');

  const applyTypesToEditor = () => {
    if (!monacoInstance) return;
    
    // Combine all enabled type definitions
    const combinedTypes = typeDefinitions
      .filter(type => type.enabled)
      .map(type => type.code)
      .join('\\n');
    
    // Apply to Monaco
    monacoInstance.languages.typescript.typescriptDefaults.addExtraLib(
      combinedTypes,
      'wx-types.d.ts'
    );

    // Refresh editor
    monacoInstance.editor.getModels().forEach((model) => {
      model.setValue(model.getValue());
    });
  };

  const handleToggleType = (id) => {
    setTypeDefinitions(prev => 
      prev.map(type => 
        type.id === id ? { ...type, enabled: !type.enabled } : type
      )
    );
  };

  const handleEditType = (type) => {
    setEditingType(type);
  };

  const handleSaveEdit = () => {
    if (!editingType) return;
    
    setTypeDefinitions(prev => 
      prev.map(type => 
        type.id === editingType.id ? editingType : type
      )
    );
    
    setEditingType(null);
  };

  const handleAddNewType = () => {
    if (!newTypeName.trim() || !newTypeCode.trim()) return;
    
    const newType = {
      id: Date.now().toString(),
      name: newTypeName,
      code: newTypeCode,
      enabled: true
    };
    
    setTypeDefinitions(prev => [...prev, newType]);
    setNewTypeName('');
    setNewTypeCode('');
  };

  const handleDeleteType = (id) => {
    setTypeDefinitions(prev => prev.filter(type => type.id !== id));
  };

  const handleSaveSettings = () => {
    applyTypesToEditor();
    onSave(typeDefinitions);
  };

  return (
    <div className="wx-types-settings">
      <div className="wx-types-settings-header">
        <h2>TypeScript Type Definitions</h2>
        <div className="wx-types-actions">
          <button onClick={handleSaveSettings} className="wx-types-save-button">Apply Changes</button>
          <button onClick={onClose} className="wx-types-close-button">Close</button>
        </div>
      </div>
      
      <div className="wx-types-content">
        <div className="wx-types-section">
          <h3>Existing Types</h3>
          <div className="wx-types-list">
            {typeDefinitions.map(type => (
              <div key={type.id} className="wx-type-item">
                <div className="wx-type-header">
                  <div className="wx-type-info">
                    <label className="wx-type-toggle">
                      <input
                        type="checkbox"
                        checked={type.enabled}
                        onChange={() => handleToggleType(type.id)}
                      />
                      <span className="wx-type-name">{type.name}</span>
                    </label>
                  </div>
                  <div className="wx-type-actions">
                    <button 
                      onClick={() => handleEditType(type)}
                      className="wx-type-edit"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteType(type.id)}
                      className="wx-type-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <pre className="wx-type-code">{type.code}</pre>
              </div>
            ))}
          </div>
        </div>
        
        {editingType && (
          <div className="wx-types-section">
            <h3>Edit Type: {editingType.name}</h3>
            <div className="wx-type-edit-form">
              <div className="wx-type-form-group">
                <label>Type Name</label>
                <input
                  type="text"
                  value={editingType.name}
                  onChange={(e) => setEditingType({...editingType, name: e.target.value})}
                  className="wx-type-input"
                />
              </div>
              <div className="wx-type-form-group">
                <label>Type Definition</label>
                <textarea
                  value={editingType.code}
                  onChange={(e) => setEditingType({...editingType, code: e.target.value})}
                  className="wx-type-textarea"
                  rows={5}
                />
              </div>
              <div className="wx-type-form-actions">
                <button onClick={handleSaveEdit} className="wx-type-save">Save Changes</button>
                <button onClick={() => setEditingType(null)} className="wx-type-cancel">Cancel</button>
              </div>
            </div>
          </div>
        )}
        
        <div className="wx-types-section">
          <h3>Add New Type</h3>
          <div className="wx-type-add-form">
            <div className="wx-type-form-group">
              <label>Type Name</label>
              <input
                type="text"
                value={newTypeName}
                onChange={(e) => setNewTypeName(e.target.value)}
                placeholder="e.g. MyInterface"
                className="wx-type-input"
              />
            </div>
            <div className="wx-type-form-group">
              <label>Type Definition</label>
              <textarea
                value={newTypeCode}
                onChange={(e) => setNewTypeCode(e.target.value)}
                placeholder="declare interface MyInterface {\n  property: string;\n}"
                className="wx-type-textarea"
                rows={5}
              />
            </div>
            <button onClick={handleAddNewType} className="wx-type-add">Add Type</button>
          </div>
        </div>
      </div>
    </div>
  );
}
`;