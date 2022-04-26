import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
  
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name needed'),
  email: yup.string().required('E-mail needed').email('Invalid e-mail'),
  password: yup.string().required('Password needed').min(6, 'Minumum 6 characters'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passowrds need to be the same'),
})


  
  export default function CreateUser() {
    const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm({
      resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
  
          <Box 
          as="form" 
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6","8"]}
          onSubmit={handleSubmit(handleCreateUser)}
          >
              <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

              <Divider my="6" borderColor="gray.700"/>

              <VStack spacing="8">
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                    <Input 
                    name="name" 
                    label="Nome Completo" 
                    error={errors.name} 
                    {...register('name')} 
                    />
                    <Input 
                    name="email" 
                    type="email" 
                    label="E-mail" 
                    error={errors.email}
                    {...register('email')}
                    />
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                    <Input 
                    name="password" 
                    type="password" 
                    label="Password" 
                    error={errors.password}
                    {...register('password')}
                    />
                    <Input 
                    name="password_confirmation" 
                    type="password" 
                    label="Confirm your password" 
                    error={errors.password_confirmation}
                    {...register('password_conformation')}
                    />
                </SimpleGrid>
              </VStack>

              <Flex mt="8" justify="flex-end">
                  <HStack spacing="4">
                    <Link href="/users/create" passHref>
                      <Button colorScheme="whiteAlpha">Cancel</Button>
                    </Link>
                      <Button 
                      type="submit" 
                      colorScheme="pink"
                      isLoading={isSubmitting}
                      >
                        Save
                      </Button>
                  </HStack>
              </Flex>
          </Box>  
        </Flex>
      </Box>
    );
  }