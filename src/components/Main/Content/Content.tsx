import './Content.css';
import Header from '../../Header/Header';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';
import ContentPhoto from '../../../assets/ContentPhoto.svg';
import { ContentData } from '../../../utils/constants';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <section className="content">
        <nav className="content__nav">
          <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
          <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
        </nav>
        <div>
          <p>Filter</p>
        </div>
        <div className="content__grid">
          <div className="content__grids">
            <ContentSortWindow width="325px" height="75px" borderRadius="13px">
              <p className="content__title">{ContentData.new}</p>
            </ContentSortWindow>

            <ContentCard
              tag="Соц сети"
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Сcылка на контент"
              date="Aug 20, 2021"
              count="0/4"
              width="328px"
              height="258px"
            />

            <ContentCard
              tag="Соц сети"
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Сcылка на контент"
              date="Aug 20, 2021"
              count="0/4"
              width="328px"
              height="258px"
            />

            <ContentCard
              tag="Соц сети"
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Сcылка на контент"
              date="Aug 20, 2021"
              count="0/4"
              width="328px"
              height="258px"
            />
          </div>
          <div className="content__grids">
            <ContentSortWindow width="451px" height="75px" borderRadius="13px">
              <p className="content__title">{ContentData.inProcess}</p>
            </ContentSortWindow>
            <ContentCard
              tag={['Хабр', 'Телеграмм', 'Хабр', 'Телеграмм']}
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Ссылка на контент"
              date="Aug 20, 2021"
              count="3/4"
              width="451px"
              height="258px"
            />
            <ContentCard
              tag={['Хабр', 'Телеграмм']}
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Ссылка на контент"
              date="Aug 20, 2021"
              count="2/4"
              width="451px"
              height="258px"
            />
            <ContentCard
              tag={['Хабр', 'Телеграмм']}
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Ссылка на контент"
              date="Aug 20, 2021"
              count="2/4"
              width="451px"
              height="258px"
            />
          </div>
          <div className="content__grids">
            <ContentSortWindow width="446px" height="75px" borderRadius="13px">
              <p className="content__title">{ContentData.done}</p>
            </ContentSortWindow>
            <ContentCard
              tag={['Хабр', 'Телеграмм', 'Фейсбук', 'Инстаграм']}
              photo={ContentPhoto}
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Ссылка на контент"
              date="Aug 20, 2021"
              count="4/4"
              width="446px"
              height="433px"
            />
            <ContentCard
              tag={['Хабр', 'Телеграмм', 'Фейсбук', 'Инстаграм']}
              photo={ContentPhoto}
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Ссылка на контент"
              date="Aug 20, 2021"
              count="4/4"
              width="446px"
              height="433px"
            />
          </div>
        </div>
      </section>
    </>
  );
}