import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassowrdChange = (e) => setPassword(e.target.value);

  const isMailInvalid = email === "";
  const isPasswordInvalid = password === "";

  return (
    <form className="flex w-[25rem] flex-col gap-4">
      <FormControl isInvalid={isMailInvalid}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={handleEmailChange}
        />
        {isMailInvalid && (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isPasswordInvalid}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePassowrdChange}
        />
        {isPasswordInvalid && (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}
