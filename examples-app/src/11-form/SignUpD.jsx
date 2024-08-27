import React, { useState } from "react";
import axios from "axios"; // axios import

function SignUpForm(props) {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [gender, setGender] = useState("남자");

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!username || !password || !gender) {
            alert("Please fill in all fields.");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:3030/signup", {
                username,
                password,
                gender
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Success:", response.data);
            alert("Sign-up successful!");
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during sign-up.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                사용자명:
                <input type="text" value={username} onChange={handleChangeUsername} />
            </label>
            <br />
            <label>
                비밀번호:
                <input type="password" value={password} onChange={handleChangePassword} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br />
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUpForm;
