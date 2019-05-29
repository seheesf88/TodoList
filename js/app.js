console.log('This is todo list app!');

class TodoList {
  constructor(listName){
    this.listName = listName
  }

  makeList(){
    const listName = prompt('what is your list name? ex) shopping list, today\'s todo list, homework list...');
    $('#title').eq(0).text(listName);
    todoList.start();
  }

  start(){
    $startBtn.hide()
    // $('.listDiv').visible();
    $('.listInput').append(`<input id="input" placeholder="What needs to be done?">`)
    $('.submitBtn').append(`Add item`);

    // $submitBtn.on('click', () => {
    //   const $item = $('#input').val();
    //   // console.log($item);
    //   $('#list').append(`<li>${$item}</li>`)
    // })

    $submitBtn.on('click', () => {
      const $item = $('#input').val();
      const $itemSpan = $("<span></span>");
      $itemSpan.append($item);
      const $ul = $("#list");
      const $li = $("<li></li>");
      const $removeBtn = $("<button>X</button>")
      // const $completedBtn = $("<span><input type='checkbox'></span>");
      const $completedBtn = $("<span>DONE</span>")
      const $incompletedBtn = $("<span>CANCEL</span>")

      if($('#input').val() === ''){
        alert('please enter sth')
      }else{
        // $li.append($item);
        $li.append($itemSpan);
        $li.prepend($completedBtn)

        $li.append($incompletedBtn)
        $incompletedBtn.hide();
        $li.append($removeBtn);
        $ul.append($li);
        $('#input').val('');
        // $li.onClick = todoList.delete(this)
      }
      $removeBtn.on('click', (e) => {
        const parent = $(e.target).parent()
        parent.remove();
      })

      $completedBtn.on('click', (e) => {
        console.log('done');
        $itemSpan.attr( 'style', 'text-decoration: line-through');
        $incompletedBtn.show();
        $completedBtn.hide();
      })

      $incompletedBtn.on('click', (e) => {
        console.log('cancel');
        $itemSpan.attr('style', 'text-decoration: none');
        $completedBtn.show();
        $incompletedBtn.hide();
      })
    })
  }
}//class Closer!

let todoList = new TodoList();

//variable
const $startBtn = $('.startBtn')
const $submitBtn = $('.submitBtn')


//event listner
$startBtn.on('click', todoList.makeList)
