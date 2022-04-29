import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

const signInformSchema = yup.object().shape({
  email: yup.string().required('E-mail needed').email('Invalid e-mail'),
  password: yup.string().required('Password needed'),
})

export default function SignIn() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
    resolver: yupResolver(signInformSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  }


  return (
    <Flex 
    w="100vw" 
    h="100vw" 
    align="center" 
    justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
          name="email" 
          type="email" 
          label="E-mail" 
          error={errors.email} 
          {...register('email')}
          />
          <Input 
          name="password" 
          type="password" 
          label="Password" 
          error={errors.password} 
          {...register('password')}/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" isLoading={isSubmitting}>
          Enter
        </Button>
      </Flex>
    </Flex>
  );
}
