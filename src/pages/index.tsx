import { LinkFiles } from "../components/LinkFiles";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4 h-screen bg-gray-900">
      <div className="bg-gray-600 p-8 rounded-2xl max-w-3xl w-screen">
        <section className="flex flex-col gap-1 border-b border-gray-900">
          <time className="text-xs laptop:text-xl text-gray-300 text-center">
            09/04/2022
          </time>
          <h1 className="text-2xl tablet:text-3xl font-bold text-white text-center">
            Cronograma do JA
          </h1>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl tablet:text-3xl text-white mb-4">
            Momento de Louvor
          </h2>

          <div className="flex flex-col tablet:flex-row items-center justify-between gap-2 w-full">
            <LinkFiles
              title="Brilhar por Mim - I"
              url="https://www.youtube.com/watch?v=4DJcv_Pcl6E"
            />

            <LinkFiles
              title="Alma Missionaria"
              url="https://www.youtube.com/watch?v=ojebAa9yR6I"
            />

            <LinkFiles
              title="Eu vou"
              url="https://www.youtube.com/watch?v=bWgxPMBQhrg&t=24s"
            />
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl tablet:text-3xl text-white mb-4">
            Dinâmicas
          </h2>

          <div className="flex flex-col tablet:flex-row items-center justify-between gap-2 w-full">
            <LinkFiles
              title="Coleção de Livros"
            />

            <LinkFiles
              title="Testemunho"
              url="https://iasdabv.notion.site/Testemunho-09-04-2022-497ebb81c20b4fd6943d56ca68c928a3"
            />

            {/* <LinkFiles
              title=""
            /> */}
          </div>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl tablet:text-3xl text-white mb-4">
            Mensagem
          </h2>

          <div className="flex items-center justify-between gap-2 w-full">
            <LinkFiles
              title="Arquivo de orientação"
              url="https://iasdabv.notion.site/Mensagem-09-04-2022-be33407a288e4c15af8dc91dceffd9b6"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
