import type { UploadProgressVariant } from '$stylist/token/type/alias/upload-progress-variant';
import type { SlotUploadProgressClasses as IUploadProgressClasses } from '$stylist/file/interface/slot/upload-progress-classes';
import type { SlotUploadProgressDisplayOptions as IUploadProgressDisplayOptions } from '$stylist/file/interface/slot/upload-progress-display-options';
import type { SlotUploadProgressEventHandlers as IUploadProgressEventHandlers } from '$stylist/file/interface/slot/upload-progress-event-handlers';
import type { SlotUploadProgressBehaviorOptions as IUploadProgressBehaviorOptions } from '$stylist/file/interface/slot/upload-progress-behavior-options';
import type { SlotUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

/** РћСЃРЅРѕРІРЅРѕР№ РёРЅС‚РµСЂС„РµР№СЃ РїСЂРѕРїСЃРѕРІ РєРѕРјРїРѕРЅРµРЅС‚Р° */
export interface SlotUploadProgress
	extends IUploadProgressClasses,
		IUploadProgressDisplayOptions,
		IUploadProgressEventHandlers,
		IUploadProgressBehaviorOptions {
	/** РњР°СЃСЃРёРІ С„Р°Р№Р»РѕРІ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ */
	files: SlotUploadFile[];
	/** Р’Р°СЂРёР°РЅС‚ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РєРѕРјРїРѕРЅРµРЅС‚Р° */
	variant?: UploadProgressVariant;
	/** Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ Р°С‚СЂРёР±СѓС‚С‹ РґР»СЏ РєРѕСЂРЅРµРІРѕРіРѕ СЌР»РµРјРµРЅС‚Р° */
	[key: string]: any;
}

