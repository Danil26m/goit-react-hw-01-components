import css from './Statistics.module.css';
const Statistics =({title,rgb,stats})=>{
// const {id,label,percentage}=stats;
const listItems = stats.map((stats,i)=>
    <li className={css.item} key={stats.id} style={{backgroundColor: rgb[i] }} >
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage} %</span>
    </li>
    );
return(
    <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.statList}>
    {listItems}
  </ul>
</section>
);
}
export default Statistics;