import React, { useContext, useState } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserContextValue {
  user: User;
  updateUser: (newUser: User) => void;
}

const UserContext = React.createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ name: 'John Smith', age: 45 });

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  const contextValue: UserContextValue = { user, updateUser };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const UserProfile: React.FC = () => {
  const context = useContext(UserContext);

  const user = context?.user;

  const updateUser = context?.updateUser;

  const handleUpdateUser = () => {
    if (updateUser) {
      updateUser({ name: 'Jane Doe', age: 30 });
    }
  };

  return (
    <div>
      {user && (
        <>
          <p>{`Name: ${user.name}, Age: ${user.age}`}</p>
          <button onClick={handleUpdateUser}>Update User</button>
        </>
      )}
    </div>
  );
};

export { UserProvider, UserProfile };
