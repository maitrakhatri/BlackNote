import { BlockNoteEditor } from "@blocknote/core";
import {
  Toolbar,
  ToggledStyleButton,
  TextAlignButton,
  NestBlockButton,
  ColorStyleButton,
  UnnestBlockButton,
  CreateLinkButton,
  BlockTypeDropdown,
} from "@blocknote/react";

export const CustomFormattingToolbar = (props: { editor: BlockNoteEditor }) => {
  return (
    <Toolbar>
      <BlockTypeDropdown editor={props.editor} />
      <ToggledStyleButton editor={props.editor} toggledStyle={"bold"} />
      <ToggledStyleButton editor={props.editor} toggledStyle={"italic"} />
      <ToggledStyleButton editor={props.editor} toggledStyle={"underline"} />
      <ToggledStyleButton editor={props.editor} toggledStyle={"strike"} />
      <ToggledStyleButton editor={props.editor} toggledStyle={"code"} />
      <TextAlignButton editor={props.editor} textAlignment={"left"} />
      <TextAlignButton editor={props.editor} textAlignment={"center"} />
      <TextAlignButton editor={props.editor} textAlignment={"right"} />
      <TextAlignButton editor={props.editor} textAlignment={"justify"} />
      <ColorStyleButton editor={props.editor} />
      <NestBlockButton editor={props.editor} />
      <UnnestBlockButton editor={props.editor} />
      <CreateLinkButton editor={props.editor} />
    </Toolbar>
  );
};
