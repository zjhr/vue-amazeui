<template>
    <vueview>
        <navbar slot="header" blue>
            Typography
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group>
			<h2>Headers</h2>
			<h1>h1. 不忘初心，方得始终</h1>
			<h2>h2. 不忘初心，方得始终</h2>
			<h3>h3. 不忘初心，方得始终</h3>
			<h4>h4. 不忘初心，方得始终</h4>
			<h5>h5. 不忘初心，方得始终</h5>
			<h6>h6. 不忘初心，方得始终</h6>
			<h2>Paragraph</h2>
			<p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
			<h2>hr</h2>
			<hr>
			<h2>Blockquote</h2>
			<blockquote>
				<p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p><small>马尔克斯 ——《百年孤独》</small></blockquote>
			<h2>Lists</h2>
			<h3>ul</h3>
			<ul>
				<li>条目 #1</li>
				<li>条目 #2
					<ul>
						<li>条目 #1</li>
						<li>条目 #2
							<ul>
								<li>条目 #1</li>
								<li>条目 #2</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>条目 #3</li>
				<li>条目 #4</li>
			</ul>
			<h3>ol</h3>
			<ol>
				<li>条目 #1</li>
				<li>
					条目 #2
					<ol>
						<li>条目 #1</li>
						<li>
							条目 #2
							<ol>
								<li>条目 #1</li>
								<li>条目 #2</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>条目 #3</li>
				<li>条目 #4</li>
			</ol>
			<h3>dl</h3>
			<dl><dt>响应式网页设计</dt>
				<dd>自适应网页设计（英语：Responsive web design，通常缩写为RWD）是一种网页设计的技术做法，该设计可使网站在多种浏览设备（从桌面电脑显示器到移动电话或其他移动产品设备）上阅读和导航，同时减少缩放、平移和滚动。</dd><dt>响应式网页设计（RWD）的元素</dt>
				<dd>采用 RWD 设计的网站 使用 CSS3 Media queries，即一种对 @media 规则的扩展，以及流式的基于比例的网格和自适应大小的图像以适应不同大小的设备。</dd>
			</dl>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    export default {
        components: {
            ...Index
        }

    }
</script>

<style scoped>

</style>