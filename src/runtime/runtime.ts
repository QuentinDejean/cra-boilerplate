const getHTMLScriptElements = (entrypoints: string[]) => {
  return entrypoints.map((url: string) => {
    const script = document.createElement('script')

    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', url)

    return script
  })
}

const appendToWindow = (htmlScriptElements: HTMLScriptElement[]) => {
  htmlScriptElements.forEach((htmlScriptElement) => {
    document.body.appendChild(htmlScriptElement)
  })
}

;(async () => {
  const url = process.env.APP_URL as string
  const response = await fetch(`${url}/asset-manifest.json`)
  const data = await response.json()

  const entrypoints: string[] = data.entrypoints

  const scripts = getHTMLScriptElements(entrypoints)

  appendToWindow(scripts)
})()

export {}
