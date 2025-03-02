export const WxTypesCSS: string = `.wx-types-container {
  width: 800px;
  padding: 16px;
  background: #1e1e1e;
  color: #e0e0e0;
  height: auto;
  max-height: 100%;
  overflow-y: auto;
}

.wx-types-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.wx-types-summary h3 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 500;
}

.wx-types-info {
  width: 100%;
  margin-bottom: 24px;
}

.wx-types-info p {
  color: #a0a0a0;
  margin: 0 0 8px 0;
  font-size: 14px;
}

.wx-types-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
}

.wx-types-list-item {
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-family: monospace;
  font-size: 13px;
}

.wx-types-list-item:last-child {
  border-bottom: none;
}

.wx-types-settings-button {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  align-self: flex-start;
}

.wx-types-settings-button:hover {
  opacity: 0.9;
}
  
.wx-types-settings {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  color: #e0e0e0;
  overflow-y: auto;
}

.wx-types-settings-header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.wx-types-settings-header h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.wx-types-actions {
  display: flex;
  gap: 8px;
}

.wx-types-save-button {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.wx-types-save-button:hover {
  opacity: 0.9;
}

.wx-types-close-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a0a0a0;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.wx-types-close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.wx-types-content {
  padding: 16px;
}

.wx-types-section {
  margin-bottom: 24px;
}

.wx-types-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  font-weight: 500;
  color: #a0a0a0;
}

.wx-types-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wx-type-item {
  background: rgba(30, 30, 30, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.wx-type-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
}

.wx-type-info {
  display: flex;
  align-items: center;
}

.wx-type-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.wx-type-toggle input {
  margin: 0;
}

.wx-type-name {
  font-weight: 500;
}

.wx-type-actions {
  display: flex;
  gap: 8px;
}

.wx-type-edit, 
.wx-type-delete, 
.wx-type-save, 
.wx-type-cancel,
.wx-type-add {
  padding: 6px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a0a0a0;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.wx-type-edit:hover, 
.wx-type-save:hover,
.wx-type-add:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
  color: #6366f1;
}

.wx-type-delete:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.wx-type-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.wx-type-code {
  margin: 0;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.2);
  color: #a0a0a0;
  font-family: monospace;
  font-size: 13px;
  line-height: 1.5;
  overflow-x: auto;
}

.wx-type-edit-form,
.wx-type-add-form {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  padding: 16px;
}

.wx-type-form-group {
  margin-bottom: 16px;
}

.wx-type-form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  color: #a0a0a0;
}

.wx-type-input,
.wx-type-textarea {
  width: 100%;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #e0e0e0;
  font-family: monospace;
  font-size: 13px;
}

.wx-type-textarea {
  resize: vertical;
}

.wx-type-input:focus,
.wx-type-textarea:focus {
  outline: none;
  border-color: #6366f1;
}

.wx-type-form-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}`;