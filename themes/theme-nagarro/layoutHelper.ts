import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, other?: any): CSSProperties {
  const isColor = background && ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0)

  const style = {
    background: isColor
      ? background
      : null,
    backgroundImage: isColor
      ? null
      : background
        ? `url("${resolveAssetUrl(background)}")`
        : null,
    ...other
  }

  if (!style.background)
    delete style.background

  return style
}
