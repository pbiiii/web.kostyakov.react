import React from "react";
import { Button } from 'element-react'

export const Undo = ({onUndo, canUndo}) => (
    <Button
        type="warning"
        onClick={() => {onUndo()}}
        disabled={!canUndo}
    >
        Вернуть назад
    </Button>
)