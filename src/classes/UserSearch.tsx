import { setupMaster } from "cluster";
import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: "",
        user: undefined,
    };

    findUser = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

        this.setState({ user: foundUser });
    };

    render() {
        const { user, name } = this.state;

        return (
            <div>
                <h3>User Search</h3>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button onClick={this.findUser}>Find User</button>

                <div>
                    {user && user.name}
                    {user && user.age}
                </div>
            </div>
        );
    }
}

export default UserSearch;
