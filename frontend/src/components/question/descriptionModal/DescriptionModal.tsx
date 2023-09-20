import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Spacer,
  Textarea,
  Grid
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { PRIMARY_COLOR } from '../../../CommonStyles';

interface Props {
  isVisible: boolean;
  data: {
    title: string;
    categories: string;
    complexity: string;
    description: string
  };
  closeHandler: () => void;
}

const DescriptionModal: React.FC<Props> =
  ({ isVisible, data, closeHandler }) => {
    return (
      <>
        <Modal
          isOpen={isVisible}
          onClose={closeHandler}
          size={'xl'}
          autoFocus={false}
          colorScheme={'pink'}
        >
          <ModalOverlay />
          <ModalContent backgroundColor={PRIMARY_COLOR} style={{ color: 'white' }}>
            <ModalHeader color={'white'}>{data.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid gap={5}>
                <Flex>
                  <Text color='white' as='b' marginRight={'3px'}>
                    Category:
                  </Text>
                  <Text color='white'>
                    {data.categories}
                  </Text>
                  <Spacer />
                  <Text color='white' as='b' marginRight={'3px'}>
                    Complexity:
                  </Text>
                  <Text color='white'>
                    {data.complexity}
                  </Text>
                </Flex>
                <Textarea
                  isReadOnly
                  rows={20}
                  resize={'none'}
                  value={data.description}
                />
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={closeHandler}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal >
      </>
    );
  }


export default DescriptionModal;