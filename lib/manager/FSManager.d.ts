import { IResource } from '../resource/Resource';
export interface FSManager {
    serialize(resource: IResource): object;
    unserialize(serializedResource: object): IResource;
}
export declare class FSPath {
    paths: Array<string>;
    constructor(path: FSPath | Array<string> | string);
    isRoot(): boolean;
    fileName(): string;
    rootName(): string;
    parentName(): string;
    getParent(): FSPath;
    hasParent(): boolean;
    removeRoot(): void;
    clone(): FSPath;
    toString(): string;
}
