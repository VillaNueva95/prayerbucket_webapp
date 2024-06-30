import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Avatar } from "../../Avatar";

export const CreateOrganization = () => {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(null);
    const [orgName, setOrgName] = useState('');
    const [orgType, setOrgType] = useState('');
    const [language, setLanguage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchCsrfToken = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/csrf-token', {
                method: 'GET',
                credentials: 'include'
            });
            console.log('CSRF response status:', response.status);
            if (!response.ok) {
                console.error('Response not OK:', response);
                throw new Error('Failed to fetch CSRF token');
            }
            const data = await response.json();
            console.log('CSRF token:', data.csrf_token);
            return data.csrf_token;
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
            throw new Error('Failed to fetch CSRF token');
        }
    };

    const createOrganization = async (formData, csrfToken) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/register/organization', {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            console.log('Create org response status:', response.status);
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error data:', errorData);
                throw new Error('Failed to create organization. Please try again.');
            }

            return response.json();
        } catch (error) {
            console.error('Error creating organization:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            const csrfToken = await fetchCsrfToken();
            const organizationData = {
                avatar,
                name: orgName,
                org_type: orgType,
                language,
                email,
                password
            };

            await createOrganization(organizationData, csrfToken);
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="create-organization">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <Avatar onImageSelect={(file) => setAvatar(file)} />
                    <div className="input-group">
                        <label className="text-wrapper">Organization Name</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Organization Name"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="box">
                        <div className="drop-downs">
                            <div className="org-type">
                                <label className="label">Type</label>
                                <div className="element-dropdown">
                                    <select
                                        className="input-select"
                                        value={orgType}
                                        onChange={(e) => setOrgType(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="church/chapel">Church</option>
                                        <option value="mosque">Mosque</option>
                                        <option value="synagogue">Synagogue</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="language">
                                <label className="label">Language</label>
                                <div className="element-dropdown">
                                    <select
                                        className="input-select"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select Language</option>
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label className="text-wrapper">Email</label>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="text-wrapper">Create Password</label>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="text-wrapper">Confirm Password</label>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default CreateOrganization;
