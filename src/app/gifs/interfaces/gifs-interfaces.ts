export interface SearchResponse {
  data: Gif[]
}
export interface Gif {
  title?: string,
  images?: Images
}
export interface Images {
  downsized_medium: GifSize
}
export interface GifSize {
  url: string
}
