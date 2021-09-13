import {Container} from './styles';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement>{
  modelName:string;
  overlayNode:React.ReactNode;
}

export const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  return(
    <Container {...props}>
      {children}
    </Container>

  );
  
}