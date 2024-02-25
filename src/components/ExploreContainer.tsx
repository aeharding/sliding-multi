import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonItemSliding>
      <IonItemOptions side="start">
        <IonItemOption color="primary">Test</IonItemOption>
        <IonItemOption color="tertiary">Boom</IonItemOption>
      </IonItemOptions>
      <IonItem>
        <IonLabel style={{ height: "600px" }}>Slide this item</IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="danger">Delete</IonItemOption>
        <IonItemOption color="warning">Another</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default ExploreContainer;
