import React from "react";
import { Button } from 'element-react'

export const Redo = ({onRedo, canRedo}) => (
    <Button
        type="success"
        onClick={() => {onRedo()}}
        disabled={!canRedo}
    >
        Вернуть вперед
    </Button>
)