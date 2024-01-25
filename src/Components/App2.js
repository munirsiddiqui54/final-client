import { useState } from "react";

import AuthPage from "./Authpage";
import ChatsPage from "./ChatsPage";

function App2() {
    const [user, setUser] = useState();

    if (!user) {
        return <AuthPage onAuth={(user) => setUser(user)} />;
    } else {
        return <ChatsPage user={user} />;
    }
}

export default App2;