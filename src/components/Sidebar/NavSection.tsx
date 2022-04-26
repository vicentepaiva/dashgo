import {Box, Text, Stack} from "@chakra-ui/react";

import { ReactNode } from "toasted-notes/node_modules/@types/react";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="Small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="strech">
       {children}
      </Stack>
    </Box>
  );
}
