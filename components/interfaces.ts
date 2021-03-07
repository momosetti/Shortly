export interface Link {
  code: string;
  original_link: string;
  full_short_link: string;
}
export interface LinksProps {
  links: Link[];
}
export interface CopyBtnProps {
  copyFun: () => void;
  shortenLink: string;
}
