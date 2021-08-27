import React from "react";

const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log();
    };

    const onDragStart = (e: React.DragEvent<HTMLInputElement>) => {
        console.log(e);
    };

    return (
        <div>
            <input type="text" onChange={onChange} />
            <div draggable onDragStart={onDragStart}>
                Drag me!
            </div>
        </div>
    );
};

export default EventComponent;
