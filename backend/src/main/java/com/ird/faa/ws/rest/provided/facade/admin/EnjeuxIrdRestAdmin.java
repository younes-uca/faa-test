package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.EnjeuxIrdAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.EnjeuxIrd;
import com.ird.faa.ws.rest.provided.converter.EnjeuxIrdConverter;
import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdVo;

@Api("Manages enjeuxIrd services")
@RestController
@RequestMapping("api/admin/enjeuxIrd")
public class EnjeuxIrdRestAdmin {

@Autowired
private EnjeuxIrdAdminService enjeuxIrdService;

@Autowired
private EnjeuxIrdConverter enjeuxIrdConverter;


            @ApiOperation("Updates the specified  enjeuxIrd")
            @PutMapping("/")
            public  EnjeuxIrdVo update(@RequestBody  EnjeuxIrdVo  enjeuxIrdVo){
            EnjeuxIrd enjeuxIrd = enjeuxIrdConverter.toItem(enjeuxIrdVo);
            enjeuxIrd = enjeuxIrdService.update(enjeuxIrd);
            return enjeuxIrdConverter.toVo(enjeuxIrd);
            }

    @ApiOperation("Finds a list of all enjeuxIrds")
    @GetMapping("/")
    public List<EnjeuxIrdVo> findAll(){
        return enjeuxIrdConverter.toVo(enjeuxIrdService.findAll());
    }

    @ApiOperation("Finds a enjeuxIrd with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EnjeuxIrdVo findByIdWithAssociatedList(@PathVariable Long id){
    return enjeuxIrdConverter.toVo(enjeuxIrdService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search enjeuxIrd by a specific criteria")
    @PostMapping("/search")
    public List<EnjeuxIrdVo> findByCriteria(@RequestBody EnjeuxIrdVo enjeuxIrdVo){
        return enjeuxIrdConverter.toVo(enjeuxIrdService.findByCriteria(enjeuxIrdVo));
        }

            @ApiOperation("Finds a enjeuxIrd by id")
            @GetMapping("/id/{id}")
            public EnjeuxIrdVo findById(@PathVariable Long id){
            return enjeuxIrdConverter.toVo(enjeuxIrdService.findById(id));
            }

            @ApiOperation("Saves the specified  enjeuxIrd")
            @PostMapping("/")
            public EnjeuxIrdVo save(@RequestBody EnjeuxIrdVo enjeuxIrdVo){
            EnjeuxIrd enjeuxIrd = enjeuxIrdConverter.toItem(enjeuxIrdVo);
            enjeuxIrd = enjeuxIrdService.save(enjeuxIrd);
            return enjeuxIrdConverter.toVo(enjeuxIrd);
            }

            @ApiOperation("Delete the specified enjeuxIrd")
            @DeleteMapping("/")
            public int delete(@RequestBody EnjeuxIrdVo enjeuxIrdVo){
            EnjeuxIrd enjeuxIrd = enjeuxIrdConverter.toItem(enjeuxIrdVo);
            return enjeuxIrdService.delete(enjeuxIrd);
            }

            @ApiOperation("Deletes a enjeuxIrd by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return enjeuxIrdService.deleteById(id);
            }
        @ApiOperation("find by chercheur numeroMatricule")
        @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public List<EnjeuxIrd> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return enjeuxIrdService.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("delete by chercheur numeroMatricule")
        @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return enjeuxIrdService.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("find by chercheur id")
        @GetMapping("/chercheur/id/{id}")
        public List<EnjeuxIrd> findByChercheurId(@PathVariable Long id){
        return enjeuxIrdService.findByChercheurId(id);
        }

        @ApiOperation("delete by chercheur id")
        @DeleteMapping("/chercheur/id/{id}")
        public int deleteByChercheurId(@PathVariable Long id){
        return enjeuxIrdService.deleteByChercheurId(id);
        }



            @PutMapping("/archiver/")
            public EnjeuxIrdVo archiver(@RequestBody EnjeuxIrdVo enjeuxIrdVo){
                EnjeuxIrd enjeuxIrd = enjeuxIrdService.archiver(enjeuxIrdConverter.toItem(enjeuxIrdVo));
                return enjeuxIrdConverter.toVo(enjeuxIrd);
                }

            @PutMapping("/desarchiver/")
            public EnjeuxIrdVo desarchiver(@RequestBody EnjeuxIrdVo enjeuxIrdVo){
                EnjeuxIrd enjeuxIrd = enjeuxIrdService.desarchiver(enjeuxIrdConverter.toItem(enjeuxIrdVo));
                return enjeuxIrdConverter.toVo(enjeuxIrd);}
            }
