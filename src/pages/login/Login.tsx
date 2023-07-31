import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import { AppDispatch } from '../../redux/root-store'
import { useDispatch } from 'react-redux'
import { useInput } from '../../hooks/useInput';
import { useNavigate } from "react-router-dom";
import { loginWithEmail } from '../../redux/auths/thunk'
import { requestOK } from 'redux-thunk-kit'



export const Login = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const { inputs, setInputs } = useInput(
        {
            email: "",
            password: "",
        }
    );

    const handleLogin = async () => {
        const a = await dispatch(loginWithEmail({ data: inputs }))
        const b = requestOK(a, loginWithEmail);

        if (b) {
            navigate('/todo')
            alert('success')

        } else {
            alert('fail')
        }
    }

    // const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputs({ password: e.target.value });
    // }

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo />
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                        <Text color="fg.muted">
                            Don't have an account? <Link href="#">Sign up</Link>
                        </Text>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" type="email" onChange={(e) => setInputs({ email: e.target.value })} value={inputs.email} />
                            </FormControl>
                            <PasswordField onChange={(e) => setInputs({ password: e.target.value })} />
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="text" size="sm" >
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button colorScheme='blue' onClick={handleLogin}>Sign in</Button>
                            <HStack>
                                <Divider />
                                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <OAuthButtonGroup />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}



