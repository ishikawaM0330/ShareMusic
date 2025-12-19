import Button from "@mui/material/Button";

interface MyButtonProps {
    label?: string;      
}

export function MyButton(props: MyButtonProps) {
    return (
        <Button>{props.label}</Button>
    );
};