import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const TodoInfo = ({ task, updateInfo, isActive, setActiveTaskId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [infoText, setInfoText] = useState(task.info || '');

  useEffect(() => {
    if (!isActive) {
      setIsEditing(false);
      setInfoText(task.info || '');
    }
  }, [isActive, task.info]);

  const handleSave = () => {
    updateInfo(task.id, infoText);
    setIsEditing(false);
  };

  const handleToggle = () => {
    setActiveTaskId(isActive ? null : task.id);
  };

  return (
    <>
      <FontAwesomeIcon icon={faCircleInfo} className="info-icon" onClick={handleToggle}/>
        {isActive && (
          <div className="todo-info-expanded">
            {isEditing ? (
              <>
                <input type="text" value={infoText} placeholder="Dodaj informacje" onChange={(e) => setInfoText(e.target.value)}/>
                <button onClick={handleSave}>Zapisz</button>
              </>
            ) : (
            <div className='info-tab'>
              <p>{task.info || 'brak'}</p>
              <FontAwesomeIcon icon={faPenToSquare} onClick={() => setIsEditing(true)} className="edit-icon"/>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TodoInfo;