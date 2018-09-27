//介绍
	var app = new Vue({
	el:'#intro',
	data:{
		message:'Hello World!',
		message1:'message'+new Date().toLocaleString(),
		todos :[
		{text:'学习JavaScript'},
		{text:'英语'}]
		
	},
	methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
	})
//Vue实例
	var data= {a:1}
	Object.freeze(data)

	var app2=new Vue({
	el:'#instance',
	data:{	data	}
	})
//模块语法
	 var app3=new Vue({
	 el:'#grammer',
	 data:{
	 message:'Hello World',
	 rawHtml:'<span style="color:blue">'
	 }
	})
//Class与Style绑定
	var app4=new Vue({
	el:'#ClaandSty',
	data:{
	isActive:{    'active':true
            },
	hasError: true,
	activeClass:'Learning',
	errorClass:'debating'
	},
      methods:{
      Change:function(){
      this.isActive.active = !this.isActive.active }
        }
	})

//条件渲染
	var app5=new Vue({
	el:'#condition',
	data:{
	now:true,
	other:true,
	ok:true},
	methods :{
	change:function()
	{this.now=!this.now	},
	show1:function()
	{this.other=!this.other}
	}
	})
	
//列表渲染
	var app6=new Vue({
	el:'#List',
	data:{
	object:{
	最帅的人:'黄村堂',
	最优秀的人:'黄村堂',
	最牛逼的人:'黄村堂'
	}
	}})
	
//事件处理
	var app7=new Vue({
	el:'#Event',
	data:{
	message:"输入信息并按enter提交"	},
	methods :{
	submit:function()
	{alert("提交成功");},
	say:function(message)
	{alert(message)}
	
	}
	})
	
//表单输入
	var app8=new Vue({
	el:'#Form',
	data:{
	message:'在文本区域插值 (<textarea></textarea>) 并不会生效，应用 v-model 来代替。',
	seen:true,
	}})