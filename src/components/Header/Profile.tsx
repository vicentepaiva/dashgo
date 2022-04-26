import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
    return(
        <Flex align="center">
        { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Vicente Paiva</Text>
                <Text color="gray.300" fontSize="small">
                    vicentepaivadev@gmail.com
                </Text>
            </Box>
        )}

            <Avatar size="md" name="Vicente Paiva" src="https://avatars.githubusercontent.com/u/60330983?v=4"/>
        </Flex>
    );
}