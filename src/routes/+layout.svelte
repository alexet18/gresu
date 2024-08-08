<script>
	import "../lib/style/font.css"
</script>



<div class='image-container'>
</div>
<div class='header-container'>
	<span class='header-title'>GRESU</span>
</div>


<main>
	<slot></slot>
</main>

<div class='footer-container'>
	<span class='header-title'>VRANCEA</span>
</div>


<style>

	.header-container{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height:72px;
		position: fixed;
		background-color: #d2b48c;
	}


	.footer-container{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height:72px;
		position: fixed;
		bottom: 0px;
		background-color: #d2b48c;
	}
	.header-title{
		font-family: 'Frijole';
		font-size: 3rem;
	}

	.image-container{
		position:fixed;
		background-image: url('../lib/images/gresu_casa.jpeg');
		opacity: 0.6;
		height:100vh;
		width: 100vw;
		z-index: -1;
	}
</style>