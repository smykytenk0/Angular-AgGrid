export interface ItemDataInterface {
  kind: string,
  etag: string,
  id: ItemIdInterface,
  snippet: ItemSnippetInterface
}

export interface ItemIdInterface {
  kind: string,
  videoId: string,
}

export interface ItemSnippetInterface {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string
  thumbnails: ItemThumbnailsInterface,
  channelTitle: string,
  liveBroadcastContent: string,
  publishTime: string
}

export interface  ItemThumbnailsInterface {
  default: ItemThumbnailsQualityInterface,
  medium: ItemThumbnailsQualityInterface,
  high: ItemThumbnailsQualityInterface
}

export interface ItemThumbnailsQualityInterface {
  url: string,
  width: string,
  height: string
}
