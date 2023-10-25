import Logo from '../assets/banner.jpg'
import {
  ButtonContainer,
  Button,
  LogoContainer,
  ParentComponent,
  Form,
  Input,
  Image
} from './style'
import useForm from '../hooks/useForm'

export default function FormComponent() {
  const { handleSubmit, handleChange, inputValues, handleCleanup } = useForm()

  return (
    <ParentComponent>
      <LogoContainer>
        <Image src={Logo} alt="form_logo" />
      </LogoContainer>
      <Form id="form_arg_pro" onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={inputValues.name}
          fontColor="red"
          placeholder="Name"
          name="name"
        />
        <Input
          onChange={handleChange}
          value={inputValues.lastName}
          fontColor="blue"
          placeholder="Last Name"
          name="lastName"
        />
        <Input
          onChange={handleChange}
          value={inputValues.email}
          type="email"
          fontColor="green"
          placeholder="email"
          name="email"
        />
        <Input
          onChange={handleChange}
          value={inputValues.password}
          type="password"
          fontColor="purple"
          placeholder="password"
          name="password"
        />
      </Form>
      <ButtonContainer>
        <Button onClick={handleCleanup}>Cancel</Button>
        <Button form="form_arg_pro" type="submit" main>
          Submit
        </Button>
      </ButtonContainer>
    </ParentComponent>
  )
}
