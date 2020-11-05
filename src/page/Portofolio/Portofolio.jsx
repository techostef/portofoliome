import React, { useEffect, useRef } from 'react'
import PortofolioHeader from './PortofolioHeader'
import PortofolioMe from './PortofolioMe'
import PortofolioAbout from './PortofolioAbout/PortofolioAbout'
import PortofolioFooter from './PortofolioFooter/PortofolioFooter'
import "./Portofolio.scss"
import { range } from '../../helpers/dataHelpers'

const Portofolio = () => {
    const canvasRef = useRef(null)
    const maxWidth = window.innerWidth
    const maxHeight = window.innerHeight

    const getColorCircle = () => {
        const colors = ['#1700ff', '#00a8ff', '#00ff07', '#c2ff00', '#ff6600', '#ff1900', '#ff00e9', '#ff004e', '#00feff']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const colorEdge = "#53525d"

    const getAmplify = (startPosition, endPositionY) => {
        const halfEndPositionY = endPositionY * 0.5
        return startPosition - halfEndPositionY
    }

    const getRandomPercentage = () => {
        let randomNumber = Math.floor(Math.random() * 9)
        return (Math.floor(Math.random() * 80) + 20) + randomNumber
    }
    
    const getPercentage = (number, percentage) => {
        return number * (percentage / 100)
    }

    const createHeaderMeteor = (ctx, startPositionX, startPositionY, endPositionX = 0, endPositionY = 0, starLightNum, color = "white") => {
        var radgrad = ctx.createLinearGradient(endPositionX, endPositionY, startPositionX, startPositionY);
        radgrad.addColorStop(0, 'rgba(255,255,255,1)');
        radgrad.addColorStop(0.5, 'rgba(255,255,255,.5)');
        radgrad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.arc(endPositionX, endPositionY, 1, 0, 2 * Math.PI);
        ctx.strokeStyle = radgrad;
        ctx.fillStyle = radgrad;
        ctx.fill();
        // ctx.stroke();
        ctx.closePath();

        // let lengthSort1, lengthSort2, lengthLong1, lengthLong2

        // const maxResult = 30
        // const halfMaxResult = maxResult / 2
        // const resultStart = starLightNum % maxResult
        // if (resultStart >= 0 && resultStart <= halfMaxResult ) {
        //     lengthSort1 = 6
        //     lengthSort2 = 2

        //     lengthLong1 = 15
        //     lengthLong2 = 10
        // } else {
        //     lengthSort1 = 5
        //     lengthSort2 = 1

        //     lengthLong1 = 13
        //     lengthLong2 = 8
        // }

        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX - lengthSort1, endPositionY - lengthSort2);
        // ctx.stroke();
        // ctx.closePath();
        
        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX - lengthSort2, endPositionY + lengthSort1);
        // ctx.stroke();
        // ctx.closePath();

        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX + lengthSort1, endPositionY + lengthSort2);
        // ctx.stroke();
        // ctx.closePath();
        
        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX + lengthSort2, endPositionY - lengthSort1);
        // ctx.stroke();
        // ctx.closePath();

        // // ---------------------------------------------------

        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX - lengthLong2, endPositionY - lengthLong1);
        // ctx.stroke();
        // ctx.closePath();
        
        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX + lengthLong2, endPositionY + lengthLong1);
        // ctx.stroke();
        // ctx.closePath();

        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX - lengthLong1, endPositionY + lengthLong2);
        // ctx.stroke();
        // ctx.closePath();
        
        // ctx.beginPath();
        // ctx.moveTo(endPositionX, endPositionY);
        // ctx.lineTo(endPositionX + lengthLong1, endPositionY - lengthLong2);
        // ctx.stroke();
        // ctx.closePath();
        
    }

    const drawSpaceItem = (ctx, startPositionX = 0, startPositionY = 0, endPositionX = 0, endPositionY = 0, starLightNum, colorCircle = "white") => {
        ctx.beginPath();
        let grd = ctx.createLinearGradient(endPositionX, endPositionY, startPositionX, startPositionY);
        grd.addColorStop(0, colorCircle);
        grd.addColorStop(0.5, "white");
        grd.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = grd;
        ctx.moveTo(startPositionX, startPositionY);
        ctx.lineTo(endPositionX, endPositionY);
        ctx.stroke();
        ctx.closePath();

        createHeaderMeteor(ctx, startPositionX, startPositionY, endPositionX, endPositionY, starLightNum)
    }

    const getRandomSpeed = () => {
        return Math.floor(Math.random() * 20) * 0.01 
    }

    const getRandomHeightMeteor = () => {
        return (Math.floor(Math.random() * 280) + 20)
    }

    useEffect(() => {
        
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.canvas.width  = maxWidth;
        ctx.canvas.height = maxHeight;
        const halfMaxWidth = maxWidth / 2

        let spaceItems = []
        let max = 100
        while(max > 0) {
            const heightMeteor = getRandomHeightMeteor()
            let percentageWidth = getRandomPercentage()
            let percentageHeight = getRandomPercentage()
            let startPositionX = getPercentage(maxWidth + 200, percentageWidth)
            // const findIndexSame = spaceItems.findIndex((item) => item.startPositionX === startPositionX)
            // if (findIndexSame !== -1) continue
            const endPositionY = getPercentage(maxHeight, percentageHeight)
            const endPositionX = getAmplify(startPositionX, heightMeteor)
            const startPositionY = endPositionY - heightMeteor 
            const colorCircle = getColorCircle()
            const rotatePercentage = 10
            const findRotate = false
            const speed = getRandomSpeed()
            let halfLeftLimit, halfRightLimit
            let index = 0
            while(!findRotate) {
                
                const rotateUnit = getPercentage(halfMaxWidth, rotatePercentage) 
                halfLeftLimit = halfMaxWidth - rotateUnit
                halfRightLimit = halfMaxWidth + rotateUnit
                if (index > 50) break
                if (halfLeftLimit <= endPositionX && halfRightLimit >= endPositionX) {
                    findRotate = true
                    break
                } else {
                    rotatePercentage += 10
                }
                index ++
            }
            
            spaceItems.push({
                startPositionX,
                startPositionY,
                endPositionX,
                endPositionY,
                percentage: percentageHeight,
                colorCircle,
                rotatePercentage,
                halfLeftLimit,
                halfRightLimit,
                speed,
                incrementSpeed: getRandomSpeed() * 0.1,
                starLightNum: Math.floor(Math.random() * 1)
            })
            max--
        }

        spaceItems.forEach((item) => {
            drawSpaceItem(ctx, item.startPositionX, item.startPositionY, item.endPositionX, item.endPositionY, item.starLightNum, item.colorCircle)
        })

        // if (spaceItems.length > 0)
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            spaceItems.forEach((item) => {
                drawSpaceItem(ctx, item.startPositionX, item.startPositionY, item.endPositionX, item.endPositionY, item.starLightNum, item.colorCircle)
               
                item.startPositionX -= item.speed
                item.startPositionY += item.speed
                item.endPositionY += item.speed
                item.endPositionX -= item.speed
                item.speed += item.incrementSpeed
                item.starLightNum += 1

                if (item.startPositionY >= maxHeight) {
                    const heightMeteor = getRandomHeightMeteor()
                    let percentageWidth = getRandomPercentage()
                    let startPositionX = getPercentage(maxWidth + 200, percentageWidth)
                    item.startPositionX = startPositionX
                    item.endPositionY = 1
                    item.endPositionX = getAmplify(item.startPositionX, heightMeteor)
                    item.startPositionY = item.endPositionY - heightMeteor
                    item.speed = getRandomSpeed()
                    item.incrementSpeed = getRandomSpeed() * 0.1
                } 
            })
        }, 30)
    }, [])

    return (
        <div className="container-portofolio">
            <canvas className="canvas" ref={canvasRef}/>
            <PortofolioMe/>
            <PortofolioHeader/>
            <PortofolioAbout/>
            <PortofolioFooter/>
        </div>
    )
}

export default React.memo(Portofolio)