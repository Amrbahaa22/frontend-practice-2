
type TTodoPropsType = {
    completed: boolean;
    text: string;
    onClick: () => any;
}

export const TodoItem: React.FC<TTodoPropsType> = ({ completed, text, onClick }) => {
    return (
        <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
        </li>
    )
}