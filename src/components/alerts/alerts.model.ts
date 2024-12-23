
   export interface AlertsInterface {
      alerts: AlertType[];
      displayCloseButton?: boolean;
      onRemove: (index: number) => void;
   }
    
    export type AlertType = {
      text?: string;
      type: "success" | "error" | "warning" | "info";
      title?: string;
    };
    