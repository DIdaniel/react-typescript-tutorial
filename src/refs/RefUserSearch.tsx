import { useState, useRef, useEffect } from "react";

const users = [
    { name: "Sarah", age: 20 },
    { name: "Kiana", age: 30 },
    { name: "Patrick", age: 40 },
];

const RefUserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.focus();
    }, []);

    const findUser = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return (
        <div>
            <h3>User Search</h3>

            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={findUser}>Find User</button>

            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
};

export default RefUserSearch;
