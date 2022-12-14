import { FootnoteReferenceRun } from "../../file/footnotes/footnote/run/reference-run";
import { IXmlableObject, XmlComponent } from "../../file/xml-components";
import { File } from "../file";
import { DeletedTextRun, InsertedTextRun } from "../track-revision";
import { PageBreak } from "./formatting/page-break";
import { Bookmark, HyperlinkRef } from "./links";
import { Math } from "./math";
import { IParagraphPropertiesOptions } from "./properties";
import { PictureRun, Run, SequentialIdentifier, SymbolRun, TextRun } from "./run";
export interface IParagraphOptions extends IParagraphPropertiesOptions {
    readonly text?: string;
    readonly children?: (TextRun | PictureRun | SymbolRun | Bookmark | PageBreak | SequentialIdentifier | FootnoteReferenceRun | HyperlinkRef | InsertedTextRun | DeletedTextRun | Math)[];
}
export declare class Paragraph extends XmlComponent {
    private readonly properties;
    constructor(options: string | PictureRun | IParagraphOptions);
    prepForXml(file: File): IXmlableObject | undefined;
    addRunToFront(run: Run): Paragraph;
}
