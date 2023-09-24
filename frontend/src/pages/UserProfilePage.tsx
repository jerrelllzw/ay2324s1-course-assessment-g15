import { useState } from "react";
import { Box, Center, Flex } from '@chakra-ui/react';
import UserProfileMenu from '../components/user/UserProfileMenu';
import UserPersonalInfo from '../components/user/UserPersonalInfo';
import UserSecurity from '../components/user/UserSecurity';
import NavigationBar from '../components/NavigationBar';
import LocalStorageHandler from '../handlers/LocalStorageHandler';

const UserProfilePage = () => {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const userDataString = LocalStorageHandler.getUserData()!;
  return (
    <Box>
      <Box alignItems={'center'} justifyItems={'center'}>
        <NavigationBar mb={0} />
        <Flex>
          <UserProfileMenu
            currentMenuIndex={currentMenuIndex}
            setCurrentMenuIndex={setCurrentMenuIndex}
          />
          <Box width={'80vw'}>
            <Center alignItems={'center'} justifyItems={'center'} height={'100%'}>
              {currentMenuIndex === 0 && <Box></Box>}
              {currentMenuIndex === 1 && <UserPersonalInfo user={userDataString} />}
              {currentMenuIndex === 2 && <UserSecurity />}
            </Center>
          </Box>
        </Flex >
      </Box >
    </Box>
  );
}

export default UserProfilePage;