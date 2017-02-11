/**
 * Created by gdc on 2017/2/5.
 */
(function(){
    var Util = (function(){
        var prefix = 'html5_reader_';
        var StorageGetter = function(key){
            return localStorage.getItem(prefix+key);
        }
        var StorageSetter = function(key,val){
            return localStorage.setItem(prefix+key,val);
        }
        return{
            StorageGetter:StorageGetter,
            StorageSetter:StorageSetter
        }
    })();

    var Dom ={
        top_nav:$('#top-nav'),
        bottom_nav:$('.bottom_nav')
    }
    //整个项目的入口函数
    function main(){

    }
    //实现和阅读器相关数据交互的方法
    function ReaderModel(){

    }
    //渲染基本的UI结构
    function ReaderBaseFrame(){

    }
    //交互事件的绑定
    function EventHanlder(){

    }
})();