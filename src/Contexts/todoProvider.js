const UserProvider = ({ children }) => {
  const [name, setName] = useState("todo");
  const [desc, setDesc] = useState(1);
//   const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age}}>
      {children}
    </UserContext.Provider>
  );
};