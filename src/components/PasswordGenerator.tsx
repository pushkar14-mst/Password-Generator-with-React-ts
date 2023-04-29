import { useState } from "react";
type Props = {
  inputString: string;
};

interface Password {
  (pwd: string): string;
}

const PasswordGenerator: React.FC<Props> = (props: Props) => {
  const [password, setPassword] = useState<string>("");
  const convertInput = (input: Password) => {
    setPassword(input(props.inputString));
  };
  function newlyGeneratedPassword(pwd: string) {
    function generateSpecialCharacter(pass: string) {
      const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const randomIndex = Math.floor(Math.random() * specialCharacters.length);
      return `${pass[0]}+${specialCharacters[randomIndex]}`;
    }
    let newPassword =
      pwd[0] +
      generateSpecialCharacter(pwd) +
      generateSpecialCharacter(pwd[2]) +
      generateSpecialCharacter(pwd[3]) +
      generateSpecialCharacter(pwd[2]) +
      pwd[pwd.length - 1];
    console.log(newPassword);

    return newPassword;
  }

  return (
    <>
      <button
        onClick={() => {
          convertInput(newlyGeneratedPassword);
        }}
      >
        Generate
      </button>
      <h1>Your generated password is : {password}</h1>
    </>
  );
};

export default PasswordGenerator;
