import type { INotificationSettingsProps } from '$stylist/communication/interface/component/notifications/other';
import type { INotificationSettingsPreference } from '$stylist/communication/type/struct/notification-settings-preference';
import type { TokenNotifictionChannel } from '$stylist/communication/type/enum/notification-channel';
import { updateNotificationPreference } from '$stylist/management/function/script/notification-settings';

const Bell = 'bell';
const Mail = 'mail';
const Smartphone = 'smartphone';
const Monitor = 'monitor';
const Settings = 'settings';

export interface NotificationSettingsStateProps extends INotificationSettingsProps {
  preferences?: INotificationSettingsPreference[];
  onPreferenceChange?: (id: string, channel: TokenNotifictionChannel, enabled: boolean) => void;
  showEmail?: boolean;
  showPush?: boolean;
  showSms?: boolean;
  showInApp?: boolean;
  class?: string;
  headerClass?: string;
  sectionClass?: string;
  footerClass?: string;
}

export function createNotificationSettingsState(props: NotificationSettingsStateProps) {
  // Props with defaults
  const preferences = $derived(props.preferences ?? []);
  const onPreferenceChange = $derived(props.onPreferenceChange);
  const showEmail = $derived(props.showEmail ?? true);
  const showPush = $derived(props.showPush ?? true);
  const showSms = $derived(props.showSms ?? true);
  const showInApp = $derived(props.showInApp ?? true);
  const className = $derived(props.class ?? '');
  const headerClassName = $derived(props.headerClass ?? '');
  const sectionClassName = $derived(props.sectionClass ?? '');
  const footerClassName = $derived(props.footerClass ?? '');

  // Icons
  const bellIcon = Bell;
  const mailIcon = Mail;
  const smartphoneIcon = Smartphone;
  const monitorIcon = Monitor;
  const settingsIcon = Settings;

  // Methods
  function handlePreferenceChange(id: string, channel: TokenNotifictionChannel, enabled: boolean): void {
    updateNotificationPreference(preferences, id, channel, enabled, onPreferenceChange);
  }

  // Rest props
  const restProps = $derived.by(() => {
    const {
      class: _class,
      headerClass: _headerClass,
      sectionClass: _sectionClass,
      footerClass: _footerClass,
      preferences: _preferences,
      onPreferenceChange: _onPreferenceChange,
      showEmail: _showEmail,
      showPush: _showPush,
      showSms: _showSms,
      showInApp: _showInApp,
      ...rest
    } = props;
    return rest;
  });

  return {
    get preferences() {
      return preferences;
    },
    get showEmail() {
      return showEmail;
    },
    get showPush() {
      return showPush;
    },
    get showSms() {
      return showSms;
    },
    get showInApp() {
      return showInApp;
    },
    get className() {
      return className;
    },
    get headerClassName() {
      return headerClassName;
    },
    get sectionClassName() {
      return sectionClassName;
    },
    get footerClassName() {
      return footerClassName;
    },
    get bellIcon() {
      return bellIcon;
    },
    get mailIcon() {
      return mailIcon;
    },
    get smartphoneIcon() {
      return smartphoneIcon;
    },
    get monitorIcon() {
      return monitorIcon;
    },
    get settingsIcon() {
      return settingsIcon;
    },
    get restProps() {
      return restProps;
    },
    handlePreferenceChange
  };
}

export default createNotificationSettingsState;
