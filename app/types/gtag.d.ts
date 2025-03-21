type GtagConfigParams = {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  send_to?: string;
  [key: string]: string | undefined;
};

type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
};

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      params?: GtagConfigParams | GtagEventParams | Date
    ) => void;
    dataLayer: Array<{
      [key: string]: unknown;
    }>;
  }
}

export {}; 