import {useInput} from "../hooks/useInput";

export function Inputs() {
    const username = useInput('');
    const password = useInput('');

    return (
        <div>
            <div>
                <input {...username} type="text" placeholder="Username"/>
                <div>{username.value}</div>
            </div>
            <div>
                <input {...password} type="password" placeholder="Password"/>
                <div>{password.value}</div>
            </div>
        </div>
    )
}
