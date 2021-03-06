import { ProgressItem } from '../ojprogresslist';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface FileUploadTransport {
    flush(): void;
    queue(fileList: FileList): ProgressItem[];
}
export interface ojFilePicker extends JetElement<ojFilePickerSettableProperties> {
    accept: string[] | null;
    selectOn: 'auto' | 'click' | 'drop' | 'clickAndDrop';
    selectionMode: 'multiple' | 'single';
    addEventListener<T extends keyof ojFilePickerEventMap>(type: T, listener: (this: HTMLElement, ev: ojFilePickerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojFilePickerSettableProperties>(property: T): ojFilePicker[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojFilePickerSettableProperties>(property: T, value: ojFilePickerSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojFilePickerSettableProperties>): void;
    setProperties(properties: ojFilePickerSettablePropertiesLenient): void;
}
export namespace ojFilePicker {
    interface ojSelect extends CustomEvent<{
        files: FileList;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type acceptChanged = JetElementCustomEvent<ojFilePicker["accept"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectOnChanged = JetElementCustomEvent<ojFilePicker["selectOn"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionModeChanged = JetElementCustomEvent<ojFilePicker["selectionMode"]>;
}
export interface ojFilePickerEventMap extends HTMLElementEventMap {
    'ojSelect': ojFilePicker.ojSelect;
    'acceptChanged': JetElementCustomEvent<ojFilePicker["accept"]>;
    'selectOnChanged': JetElementCustomEvent<ojFilePicker["selectOn"]>;
    'selectionModeChanged': JetElementCustomEvent<ojFilePicker["selectionMode"]>;
}
export interface ojFilePickerSettableProperties extends JetSettableProperties {
    accept: string[] | null;
    selectOn: 'auto' | 'click' | 'drop' | 'clickAndDrop';
    selectionMode: 'multiple' | 'single';
}
export interface ojFilePickerSettablePropertiesLenient extends Partial<ojFilePickerSettableProperties> {
    [key: string]: any;
}
