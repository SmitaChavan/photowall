import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* es6 start
// const element = React.createElement('p',null,'hello!');

// const element1 = React.createElement('ol',null,
// React.createElement('li',null,'text1'),
// React.createElement('li',null,'text2'),
// React.createElement('li',null,'text3')
// );
// ReactDOM.render(element1, document.getElementById('root'));

const tasks = ['one','one','three'];


//const element = tasks.map(tasks=> React.createElement('p',null, tasks));
//or
const element = React.createElement('ol', null, tasks.map((tasks,index)=> React.createElement('li',{key:index}, tasks)));
ReactDOM.render(element, document.getElementById('root'));
es6 end*/

/* with jsx start
//const element = <ol><li>hello1</li><li>hello2</li></ol>

//with array
const tasks = ['one','two','three'];

const element1 = <div>
<h1>Title list</h1>
<ol>
<li>{tasks[0]}</li>
<li>{tasks[1]}</li>
<li>{tasks[2]}</li>
</ol></div>

//interate thrgh array remove hardcoded values

const element  = <ol>
{tasks.map((tasks, index)=> <li key={index}>{tasks}</li>)}

</ol>
ReactDOM.render(element, document.getElementById('root'));
js ends*/

/*components strts
const tasks = ['read book','prepare notes'];

class Title extends Component
{
    render()
    {
        return <h1>Header</h1>
    }
}
class List extends Component
{
    render()
    {
        return  (<ol>
                    {tasks.map((tasks, index)=> <li key={index}>{tasks}</li>)} 
                </ol>)
    }
}
class Main extends Component
{
    render()
    {
        return(
        <div>
            <Title/>
            <List/>
        </div>)
    }
} 
components ends
*/

/* parmeterised components*/
class Title extends Component
{
    render()
    {
        return <h1>{this.props.value}</h1>
    }
}
class List extends Component
{
    render()
    {
        return  (<ol>
                    {this.props.tasks.map((tasks, index)=> <li key={index}>{tasks}</li>)} 
                </ol>)
    }
}
class Main extends Component
{
    render()
    {
        return(
        <div>
            <Title value = {'ToDos'}/>
            <List tasks={['read book','prepre answers']}/>
            <List tasks={['go to exam','give exam']}/>
        </div>)
    }
} 



 ReactDOM.render(<Main/>, document.getElementById('root'));