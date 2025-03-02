export const WxTypes = `/**
Name: WxTypes
Type: Extension
Description: Add custom type definitions to the TypeScript language service
Author: Wx Team
 */

import * as monaco from 'monaco-editor';
import { useEffect } from "react";
import { WxTypesSettings } from "./WxTypesSettings";
import './WxTypes.css';


interface WxTypesProps {
    monacoInstance: typeof monaco;
}


interface TypeDefinition {
    id: string;
    name: string;
    code: string;
    enabled: boolean;
  }


export default function WxTypes({
 monacoInstance
}: WxTypesProps) {
    const [showSettings, setShowSettings] = useState(false);
    const [typeDefinitions, setTypeDefinitions] = useState([
        {
          id: '1',
          name: 'WxBuider',
          code: \`declare type Builder = {
        name: string;
        age: number;
    };\`,
            enabled: true
            },
            {
            id: '2',
            name: 'WxEditor',
            code: \`declare interface Editor {
        editor: monacoEditor;
    };\`,
            enabled: true
            }
        ]);

           const applyTypes = () => {
        if (!props.monacoInstance) return;

        // Combine all enabled type definitions
        const combinedTypes = typeDefinitions
            .filter(type => type.enabled)
            .map(type => type.code)
            .join('\\n\\n');
        
        console.log('WxTypes applying types', combinedTypes);
        
        // Apply to Monaco
        props.monacoInstance.languages.typescript.typescriptDefaults.addExtraLib(
            combinedTypes,
            'wx-types.d.ts'
        );

        props.monacoInstance.languages.typescript.typescriptDefaults.setCompilerOptions({
            ...props.monacoInstance.languages.typescript.typescriptDefaults.getCompilerOptions(),
            allowJs: true, // Ensure JavaScript also recognizes types
        });

        // Refresh editor
        props.monacoInstance.editor.getModels().forEach((model) => {
            model.setValue(model.getValue()); // Trigger Monaco to reparse types
        });
    };

    const handleSaveSettings = (updatedTypes) => {
        setTypeDefinitions(updatedTypes);
        setShowSettings(false);
    };

    useEffect(() => {        
        if (!props.monacoInstance) return;
        applyTypes();
    }, [props.monacoInstance, typeDefinitions]);


    // useEffect(() => {        
    //     if (!props.monacoInstance) return;

    //     console.log('WxTypes loaded', props.monacoInstance);
    //     // Add your custom type definitions

    //     // Using props. to get a direct reference to the monaco instance rather than a copy of it like: moracoInstance directly
    //      props.monacoInstance.languages.typescript.typescriptDefaults.addExtraLib(\`
    //         declare type MyNewType = {
    //             name: string;
    //             age: number;
    //         };

    //         // Add more custom types here
    //         declare interface MyCustomInterface {
    //             id: string;
    //             value: MyNewType;
    //         }
    //     \`, 'wx-types.d.ts');

    //                 props.monacoInstance.languages.typescript.typescriptDefaults.setCompilerOptions({
    //             ...props.monacoInstance.languages.typescript.typescriptDefaults.getCompilerOptions(),
    //             allowJs: true, // Ensure JavaScript also recognizes types
    //         });

    //         props.monacoInstance.editor.getModels().forEach((model) => {
    //             model.setValue(model.getValue()); // Trigger Monaco to reparse types
    //         });

    // }, []);

    return (
               <div className="wx-types-container">
            {showSettings ? (
                <WxTypesSettings 
                    monacoInstance={props.monacoInstance} 
                    onSave={handleSaveSettings}
                    onClose={() => setShowSettings(false)}
                />
            ) : (
                <div className="wx-types-summary">
                    <h3>TypeScript Type Definitions</h3>
                    <div className="wx-types-info">
                        <p>{typeDefinitions.filter(t => t.enabled).length} active type definitions</p>
                        <ul className="wx-types-list">
                            {typeDefinitions
                                .filter(type => type.enabled)
                                .map(type => (
                                    <li key={type.id} className="wx-types-list-item">
                                        {type.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <button 
                        className="wx-types-settings-button"
                        onClick={() => setShowSettings(true)}
                    >
                        Manage Type Definitions
                    </button>
                </div>
            )}
        </div>
        );
}
`;
