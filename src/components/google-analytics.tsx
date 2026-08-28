import { GA_ID, isExistGaId } from '../lib/gtag'

const GoogleAnalytics = () => {
  if (!isExistGaId) return null
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        id="google-analytics"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: gtag の初期化スニペットはインラインスクリプトとして埋め込む必要があり、埋め込む文字列に外部入力は含まれない
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
