import { DefaultOverlayContent } from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import { Container } from "./styles";

export const Page: React.FC = () => {
  return(
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection 
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
}